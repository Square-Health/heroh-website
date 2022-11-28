import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useForm } from 'react-hook-form'
import { useForm as useFormspree } from '@formspree/react'
import ErrorMessage from 'components/ErrorMessage'

export const ContactCard = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const [serverState, sendToFormspree] = useFormspree('xwkwzvya', {
    data: { 'g-recaptcha-response': executeRecaptcha },
  })
  const {
    register,
    handleSubmit,
    formState: { errors, ...formState },
  } = useForm()

  return (
    <Card>
      <form
        onSubmit={handleSubmit(sendToFormspree)}
        // action="https://formspree.io/f/xwkwzvya"
        method="POST"
      >
        <div className="flex flex-col space-y-3">
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              placeholder="Your name"
              {...register('name', {
                required: 'Required',
              })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </InputGroup>
          <InputGroup>
            <Label htmlFor="company">Company</Label>
            <Input
              {...register('company')}
              name="name"
              placeholder="Your company"
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              name="email"
              placeholder="you@example.com"
              type="email"
              {...register('email', {
                required: 'Required',
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Should be an email',
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
              {...register('message', {
                required: 'Required',
              })}
              name="message"
              id="message"
              cols={30}
              rows={3}
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="How can we help you?"
            ></textarea>
            {errors.message && (
              <ErrorMessage>{errors.message.message}</ErrorMessage>
            )}
            <button
              type="submit"
              disabled={!!Object.keys(errors).length || serverState.submitting}
              className="px-3 py-2 text-lg font-semibold bg-gray-800 rounded-md cursor-pointer text-gray-50 hover:bg-gray-700"
            >
              {serverState.succeeded ? (
                'Thanks!'
              ) : formState.isSubmitting ? (
                'Submitting...'
              ) : (
                <div className="flex flex-row items-center justify-center space-x-2">
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

      <div className="mt-4" id="recaptcha_badge"></div>
    </Card>
  )
}

const Contact = () => {
  return (
    <Container>
      <h3 className="text-4xl font-extrabold">Contact Us</h3>
      <span className="pb-8 text-lg text-gray-700">
        We'll get back to you as soon as possible.
      </span>
      <ContactCard />
    </Container>
  )
}

export const InputGroup = ({ children }) => (
  <div className="flex flex-col space-y-2">{children}</div>
)

export const Input = (props: any) => (
  <input
    type="text"
    name={props.name}
    placeholder={props.placeholder}
    id={props.name}
    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm"
    {...props}
  />
)

export const Label = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="font-medium text-gray-700 text-md">
    {children}
  </label>
)

export const Container = ({ children }) => (
  <div
    id="contact"
    className="relative flex flex-col items-center max-w-xl px-0 py-12 mx-auto space-y-3 align-middle md:px-4 lg:px-8"
  >
    {children}
  </div>
)

export const Card = ({ children }) => (
  <div className="w-full px-6 py-0 mt-8 rounded-lg shadow-none sm:bg-white bg-gray-50 md:mx-10 sm:py-10 sm:shadow-md">
    {children}
  </div>
)

export default Contact
