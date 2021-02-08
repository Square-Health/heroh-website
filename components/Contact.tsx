import { forwardRef } from "react"
import { useForm } from "react-hook-form"
import { useForm as useFormspree } from "@formspree/react"
import ErrorMessage from "components/ErrorMessage"

export const ContactCard = () => {
  const [serverState, sendToFormspree] = useFormspree("xwkwzvya")
  const { register, handleSubmit, errors, formState } = useForm()

  return (
    <Card>
      <form
        onSubmit={handleSubmit(sendToFormspree)}
        action="https://formspree.io/f/xwkwzvya"
        method="POST"
      >
        <div className="flex flex-col space-y-3">
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              placeholder="Your name"
              ref={register({
                required: "Required",
              })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </InputGroup>
          <InputGroup>
            <Label htmlFor="company">Company</Label>
            <Input ref={register} name="name" placeholder="Your company" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              name="email"
              placeholder="you@example.com"
              type="email"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Should be an email",
                },
              })}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </InputGroup>
          <InputGroup>
            <Label htmlFor="message">Message</Label>
            <textarea
              ref={register}
              name="message"
              id="message"
              cols={30}
              rows={3}
              className="rounded-md shadow-sm border border-gray-300 px-3 py-2"
              placeholder="How can we help you?"
            ></textarea>
            <button
              type="submit"
              disabled={!!Object.keys(errors).length || serverState.submitting}
              className="bg-gray-800 text-gray-50 px-3 py-2 rounded-md text-lg font-semibold cursor-pointer hover:bg-gray-700"
            >
              {serverState.succeeded ? (
                "Thanks!"
              ) : formState.isSubmitting ? (
                "Submitting..."
              ) : (
                <div className="flex flex-row items-center space-x-2 justify-center">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>Submit</span>
                </div>
              )}
            </button>
          </InputGroup>
        </div>
      </form>
    </Card>
  )
}

const Contact = () => {
  return (
    <Container>
      <h3 className="text-4xl font-extrabold">Contact Us</h3>
      <span className="text-gray-700 text-lg pb-8">
        We'll get back to you as soon as possible.
      </span>
      <ContactCard />
    </Container>
  )
}

export const InputGroup = ({ children }) => (
  <div className="flex flex-col space-y-2">{children}</div>
)

export const Input = forwardRef((props: any, ref: any) => (
  <input
    type="text"
    ref={ref}
    name={props.name}
    placeholder={props.placeholder}
    id={props.name}
    className="rounded-md shadow-sm border border-gray-300 px-3 py-2"
  />
))

export const Label = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="text-md text-gray-700 font-medium">
    {children}
  </label>
)

export const Container = ({ children }) => (
  <div id="contact" className="relative flex flex-col align-middle items-center py-12 px-0 md:px-4 lg:px-8 max-w-xl space-y-3 mx-auto">
    {children}
  </div>
)

export const Card = ({ children }) => (
  <div className="sm:bg-white bg-gray-50 mt-8 w-full rounded-lg px-6 md:mx-10 py-0 sm:py-10 shadow-none sm:shadow-md">
    {children}
  </div>
)

export default Contact
