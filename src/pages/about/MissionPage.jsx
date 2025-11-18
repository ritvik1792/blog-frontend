import React from "react";
import MainLayout from "../../components/MainLayout";

const MissionPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-12">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="font-roboto text-3xl font-bold text-center text-dark-hard mb-6">Our Mission</h1>
          <p className="text-[#5a7184] leading-relaxed mb-6">
            Our mission is to foster a thoughtful, inclusive space for writers
            and readers to exchange ideas. We aim to:
          </p>

          <ul className="list-disc ml-6 text-[#5a7184] mb-6">
            <li className="mb-2">Publish well-researched, clearly written content.</li>
            <li className="mb-2">Amplify diverse voices and perspectives.</li>
            <li className="mb-2">Support contributors with constructive feedback.</li>
            <li className="mb-2">Build a respectful and curious community of readers.</li>
          </ul>

          <p className="text-[#5a7184] leading-relaxed">
            We're constantly evolving. If you'd like to contribute to our
            mission, consider applying to become a writer or reach out via
            <a className="text-primary" href="mailto:hello@example.com"> email</a>.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default MissionPage;
