import StripeCheckout from 'react-stripe-checkout';
import { PayButton } from '../../styles/payment/Payment.style';
const StripeCheckoutButton=({price})=>{

    const publishKey="pk_test_51JlYSYHXo6lyXaQeMKt3BRppkHZ9SmtAsgmImTziFxwbK0ByJIEBEQ7RZyuUKJcxo0O7ejRKf4mS2isL1kaIhtw600omCSrAR6";

    const handlePayment=(token)=>{;

    }
    return(
        <StripeCheckout
            label="Pay Now"
            name="Digital-Marketing"
            billingAddress
            shippingAddress
            description={`your Total payment is ${price}`}
            amount={price}
            token={handlePayment}
            panelLabel='Pay Now'
            stripeKey={publishKey}
       >
           <PayButton>پرداخت</PayButton>
       </StripeCheckout>
        
    )
}

export default StripeCheckoutButton;