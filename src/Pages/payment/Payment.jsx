import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import HEadingTittle from "../Shared/HEadingTittle";

// TODO: add publishable key
const stripePromise = loadStripe('');
const Payment = () => {
    return (
        <div>
            <HEadingTittle headingeading="Payment" subHeading="Please pay to eat"></HEadingTittle>
            <div>
                <Elements stripe={stripePromise}>

                </Elements>
            </div>
        </div>
    );
};

export default Payment;