import { ChartLine, QrCode, Smartphone, Wallet, WifiOff, ZapIcon } from "lucide-react"
import FeatureCard from "./feature-card"

function Features() {
    const features = [
        {
            title:"Ofline Mode",
            Icon:WifiOff,
            description:"Accept payments even without internet connection. Auto-sync when you're back online. Never miss a sale again."
        },
        {
            title:"Smart QR Codes",
            Icon:QrCode,
            description:"One QR code for all payment methods - M-PESA, Airtel Money, and card payments. Simple for your customers."
        },
        {
            title:"Instant Invoicing",
            Icon:ZapIcon,
            description:"Generate branded invoices with 'Pay Now' buttons. Send via WhatsApp, SMS, or email instantly."
        },
        {
            title:"Customer Cashback",
            Icon:Wallet,
            description:"Build customer loyalty with cashback offers. Fund rewards and watch your repeat customers grow."
        },
        {
            title:"Real-time Analytics",
            Icon:ChartLine,
            description:"Track sales, monitor performance, and get insights. Export eTIMS-ready reports with one click."
        },
        {
            title:"One-Tap M-PESA",
            Icon:Smartphone,
            description:"Instant STK push payments with smart QR codes that work for all mobile money providers."
        }
    ]
    return (
        <div className="px-4 md:px-40 lg:px-40 2xl:px-[30rem] bg-primary py-6" id="features">
            <h1 className="py-16 text-2xl font-bold lg:text-5xl text-center text-dark">Why Choose ZiwaPay</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* offline */}
              {
                features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        Icon={feature.Icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))
              }
            </div>
        </div>
    )
}

export default Features
