import { Heading1, Heading2, Paragraph } from '../components/Type'

export default function contact() {
    return (
        <div className="w-full md:w-3/4 lg:w-2/3 mx-auto my-20">
            <Heading1>Contact Us</Heading1>
            <section className="border-4 w-full h-48 my-10 p-10">
                <Heading2>
                    Contact info goes here
                </Heading2>
                <Paragraph>
                    Add MailChimp links, or embed here
                </Paragraph>
            </section>
            
        </div>
    )
}
