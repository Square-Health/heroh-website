import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LevcjwjAAAAABaIW8OOWigdaaRfFxKi94vzlvYE"
      // language="[optional_language]"
      // useRecaptchaNet="[optional_boolean_value]"
      // useEnterprise="[optional_boolean_value]"
      scriptProps={{
        async: false, // optional, default to false,
        defer: false, // optional, default to false
        appendTo: 'head', // optional, default to "head", can be "head" or "body",
        nonce: undefined, // optional, default undefined
      }}
      container={{
        // optional to render inside custom element
        element: 'recaptcha_badge',
        parameters: {
          badge: 'inline', // optional, default undefined
          // theme: 'dark', // optional, default undefined
        },
      }}
    >
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  )
}

export default App
