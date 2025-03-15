import emailjs from "emailjs-com";

// Replace with your actual EmailJS credentials
const serviceID = "service_vhw1zw4"; // Your EmailJS Service ID
const publicKey = "bSAvvOE_xuLugiX5W"; // Your EmailJS Public Key

// Define a flexible type
interface FormDataProps {
  [key: string]: string; // This ensures it's assignable to Record<string, unknown>
}

// Send Email Function
export const sendEmail = async (templateID: string, formData: FormDataProps) => {
  try {
    await emailjs.send(serviceID, templateID, formData, publicKey);
    return { success: true, message: "Message sent successfully! 🎉" };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }
};
