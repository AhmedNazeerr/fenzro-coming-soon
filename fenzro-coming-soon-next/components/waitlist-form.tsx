"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { joinWaitlist } from "@/app/actions"
import { ArrowRight, Loader2 } from "lucide-react"

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

type FormData = z.infer<typeof schema>

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const result = await joinWaitlist(data.email)
      if (result.success) {
        toast.success("Welcome to the waitlist!", {
          description: "We've sent a confirmation email to your inbox.",
        })
        reset()
      } else {
        toast.error("Something went wrong.", {
          description: result.error,
        })
      }
    } catch (error) {
      toast.error("Error", {
        description: "Failed to join waitlist. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative w-full">
      <div className="relative flex items-center">
        <input
          {...register("email")}
          placeholder="name@company.com"
          className="h-12 w-full rounded-full border border-white/10 bg-white/5 pl-5 pr-36 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="absolute right-1.5 top-1.5 bottom-1.5 h-9 rounded-full bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Join waitlist <ArrowRight className="h-3 w-3" />
            </>
          )}
        </button>
      </div>
      {errors.email && <p className="absolute -bottom-6 left-5 text-xs text-red-400">{errors.email.message}</p>}
    </form>
  )
}
