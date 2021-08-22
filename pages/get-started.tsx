import { useForm as useFormspree } from '@formspree/react'
import { useForm } from 'react-hook-form'

import { InputGroup, Label, Input, Container } from 'components/Contact'
import Layout, { Dark } from 'components/Layout'
import ErrorMessage from 'components/ErrorMessage'

const GetStartedPage = () => {
  const [serverState, sendToFormspree] = useFormspree('xbjpbyrj')
  const {
    register,
    handleSubmit,
    formState: { errors, ...formState },
  } = useForm()
  return (
    <Layout bg="bg-gray-50">
      <Dark />
      <Container>
        <h3 className="text-4xl font-extrabold text-gray-50">Get Started</h3>
        <span className="pb-8 text-lg text-gray-300">
          Reach out to us and we'll get you set up!
        </span>

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
                  {...register('name', {
                    required: 'Required',
                  })}
                />
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
              </InputGroup>
              <InputGroup>
                <Label htmlFor="company">Company</Label>
                <Input
                  {...register('name')}
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
                  {...register('message')}
                  name="message"
                  id="message"
                  cols={30}
                  rows={3}
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="How are you planning on using Heroh?"
                ></textarea>
                <button
                  type="submit"
                  disabled={
                    !!Object.keys(errors).length || serverState.submitting
                  }
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
        </Card>
      </Container>
    </Layout>
  )
}

const Card = ({ children }) => (
  <div className="w-full px-6 py-12 mt-8 rounded-none shadow-none sm:bg-white bg-gray-50 sm:rounded-lg md:mx-10 sm:py-10 sm:shadow-md">
    {children}
  </div>
)

export default GetStartedPage
