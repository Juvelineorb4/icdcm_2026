"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  request: z.string(),
  whatsapp: z.string().optional(),
});

export async function submitPrayerRequest(values: z.infer<typeof formSchema>) {
  try {
    // Here you would typically save the prayer request to a database
    // For now, we'll just log it to the console
    console.log("New Prayer Request Submitted:");
    console.log("Name:", values.name);
    console.log("Request:", values.request);
    console.log("WhatsApp:", values.whatsapp || "Not provided");
    
    // Simulate a short delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true };
  } catch (error) {
    console.error("Error submitting prayer request:", error);
    return { success: false };
  }
}
