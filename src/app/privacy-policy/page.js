import InnerPagesHero from "@/components/common/InnerPagesHero";
import React from "react";

const page = () => {
  return (
    <div>
      <InnerPagesHero title="Privacy Policy" />
      <section className="py-25">
        <div className="container">
          <div className="px-38">
            <h2 className="text-[30px] font-archivo font-semibold mb-2">
              Privacy Policy:
            </h2>
            <p className="text-[16px] leading-6 text-text-tertiary mb-4">
              Protecting your privacy is important to us. This Privacy Policy
              outlines how we collect, use, and disclose personal information
              when you use our website.
            </p>
            <ol>
              <li className="mb-5">
                <h3 className="font-archivo text-[22px] font-bold mb-2.75">
                  1. Information We Collect:
                </h3>
                <p className="text-[16px] leading-6 text-text-tertiary">
                  We collect personal information such as your name, email
                  address, and payment details when you create an account or
                  make a purchase. We also collect usage data such as IP
                  address, browser type, and pages visited.
                </p>
              </li>
              <li className="mb-5">
                <h3 className="font-archivo text-[22px] font-bold mb-2.75">
                  2. How We Use Your Information:
                </h3>
                <p className="text-[16px] leading-6 text-text-tertiary">
                  We use your personal information to provide and improve our
                  services. Your information may also be used for communication
                  purposes, such as sending newsletters or updates.
                </p>
              </li>
              <li className="mb-5">
                <h3 className="font-archivo text-[22px] font-bold mb-2.75">
                  3. Information Sharing:
                </h3>
                <p className="text-[16px] leading-6 text-text-tertiary">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent. We may
                  share your information with trusted third- party service
                  providers who assist us in operating our website.
                </p>
              </li>
              <li className="mb-5">
                <h3 className="font-archivo text-[22px] font-bold mb-2.75">
                  4. Security:
                </h3>
                <p className="text-[16px] leading-6 text-text-tertiary">
                  We implement security measures to protect your personal
                  information against unauthorized access or alteration.
                  However, no method of transmission over the Internet or
                  electronic storage is 100% secure.
                </p>
              </li>
              <li className="mb-5">
                <h3 className="font-archivo text-[22px] font-bold mb-2.75">
                  5. Your Choices:
                </h3>
                <p className="text-[16px] leading-6 text-text-tertiary">
                  You have the right to access, update, or delete your personal
                  information at any time. You can opt out of receiving
                  promotional emails by following the instructions provided in
                  the email. By using our website, you consent to the terms of
                  this Privacy Policy. If you have any questions or concerns,
                  please contact us. By using our website, you consent to the
                  terms of this Privacy Policy. If you have any questions or
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
