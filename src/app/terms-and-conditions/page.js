import InnerPagesHero from "@/components/common/InnerPagesHero";
import React from "react";

const page = () => {
  return (
    <div>
      <InnerPagesHero title="Terms & Conditions" />
      <section className="py-25">
        <div className="container">
          <div className="px-38">
            <h2 className="text-[30px] font-archivo font-semibold mb-2">
              Terms and Conditions:
            </h2>
            <p className="text-[16px] leading-6 text-text-tertiary mb-4">
              Welcome to [Your Online Education Platform]! Before accessing or
              using our website, please read these Terms and Conditions
              carefully. By accessing or using any part of the site, you agree
              to be bound by these Terms and Conditions.
            </p>
            <ol>
              <li className="mb-5">
                <h3 className="font-archivo text-[22px] font-bold mb-2.75">
                  1. Use of Website:
                </h3>
                <p className="text-[16px] leading-6 text-text-tertiary">
                  Your use of our website is subject to these Terms and
                  Conditions. You must be at least 18 years old to use our
                  services.
                </p>
              </li>
              <li className="mb-5">
                <h3 className="font-archivo text-[22px] font-bold mb-2.75">
                  2. User Account:
                </h3>
                <p className="text-[16px] leading-6 text-text-tertiary">
                  You are responsible for maintaining the confidentiality of
                  your account and password. You agree to provide accurate and
                  complete information when creating an account.
                </p>
              </li>
              <li className="mb-5">
                <h3 className="font-archivo text-[22px] font-bold mb-2.75">
                  3. Intellectual Property:
                </h3>
                <p className="text-[16px] leading-6 text-text-tertiary">
                  All content on this website, including text, graphics, logos,
                  and images, is the property of [Your Online Education
                  Platform] and protected by copyright laws. You may not
                  reproduce, distribute, or transmit any content without prior
                  written consent.
                </p>
              </li>
              <li className="mb-5">
                <h3 className="font-archivo text-[22px] font-bold mb-2.75">
                  4. Payment and Billing:
                </h3>
                <p className="text-[16px] leading-6 text-text-tertiary">
                  Payment for our services is required in advance. All fees are
                  non-refundable.
                </p>
              </li>
              <li className="mb-5">
                <h3 className="font-archivo text-[22px] font-bold mb-2.75">
                  5. Termination:
                </h3>
                <p className="text-[16px] leading-6 text-text-tertiary">
                  We reserve the right to suspend or terminate your account at
                  any time for violation of these Terms and Conditions. Please
                  review our full Terms and Conditions for more detailed
                  information.You have the right to access, update, or delete
                  your personal information at any time. You can opt out of
                  receiving promotional emails by following the instructions
                  provided in the email. By using our website, you consent to
                  the terms of this Privacy Policy. If you have any questions or
                  concerns, please contact us.  
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
