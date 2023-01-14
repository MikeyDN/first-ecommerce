import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise'
const captchaClient = new RecaptchaEnterpriseServiceClient({
  credentials: {
    private_key: process.env.RECAPTCHA_API_KEY,
    client_email: process.env.RECAPTCHA_CLIENT_EMAIL,
  },
})

export default captchaClient
