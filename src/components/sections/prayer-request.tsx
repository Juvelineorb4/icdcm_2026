"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { submitPrayerRequest } from "@/lib/actions";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  request: z.string().min(10, {
    message: "La petición de oración debe tener al menos 10 caracteres.",
  }),
  whatsapp: z.string().optional(),
});

export default function PrayerRequest() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      request: "",
      whatsapp: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await submitPrayerRequest(values);
    if (result.success) {
      toast({
        title: "Petición enviada",
        description: "Hemos recibido tu petición de oración. Nuestro equipo estará orando por ti.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un problema al enviar tu petición. Por favor, intenta de nuevo.",
      });
    }
  }

  return (
    <section id="oracion" className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              ¿Podemos orar por ti?
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Creemos en el poder de la oración. Cuéntanos tu necesidad y nuestro equipo de intercesión estará orando por ti. Tu petición es confidencial.
            </p>
          </div>
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="request"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Petición de Oración</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Escribe aquí tu petición..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>WhatsApp (Opcional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu número de WhatsApp" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Enviando..." : "Enviar Petición"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
