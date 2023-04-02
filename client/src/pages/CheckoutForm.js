import React, { useEffect, useState } from "react";
import {
    PaymentElement,
    LinkAuthenticationElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        window.localStorage.setItem('email', email)

        if (!stripe || !elements) {

            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:3000/payment",
            },
        });
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs"
    }

    return (
        <div className="container my-5">
        <form id="payment-form" onSubmit={handleSubmit}>
            <h1 className="accordion-header">Premium Plan</h1>
            <LinkAuthenticationElement
                id="link-authentication-element"
                onChange={(e) => setEmail(e.value.email)}
            />
            <PaymentElement id="payment-element" options={paymentElementOptions} />

            <button disabled={isLoading || !stripe || !elements} id="submit" className="btn btn-primary" 
             style={{paddingRight: '80px', paddingLeft: '80px', borderRadius: '15px', boxShadow: '0px 0px 5px 0px #f05b57', background: '#f05b57', paddingTop: '12px', paddingBottom: '12px', borderWidth: '0px'}}>
                   <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Subscribe"}
        </span>
            </button>
            {message && <div id="payment-message">{message}</div>}
        </form>
        </div>
    );
}