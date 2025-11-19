import React from "react";
import MainLayout from "../../components/MainLayout";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-12">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="font-roboto text-3xl font-bold text-center text-dark-hard mb-6">About Us</h1>
          <p className="text-[#5a7184] leading-relaxed mb-6">
            Welcome to our blog — a place where thoughtful writers share ideas,
            tutorials, and stories. We believe in creating high-quality content
            that informs, inspires, and connects a community of curious readers.
          </p>

          <h2 className="font-roboto text-xl font-semibold text-dark-hard mb-3">What we do</h2>
          <p className="text-[#5a7184] leading-relaxed mb-6">
            We publish articles across a range of topics — tech, culture, and
            personal growth — contributed by an ever-growing community of
            writers. Our editorial process emphasizes clarity, research, and
            respect for our readers.
          </p>

          <h2 className="font-roboto text-xl font-semibold text-dark-hard mb-3">Team</h2>
          <p className="text-[#5a7184] leading-relaxed mb-6">
            A small editorial team curates submissions, supports writers, and
            maintains the site. Interested in joining as a contributor? Visit
            the <Link to="/register/writer" className="text-primary">Become a Writer</Link> page to apply, or,
            if you're already a registered user, <Link to="/upgrade/writer" className="text-primary">upgrade to writer</Link>.
          </p>

          <h2 className="font-roboto text-xl font-semibold text-dark-hard mb-3">Contact</h2>
          <p className="text-[#5a7184] leading-relaxed">
            For general inquiries, email us at <a className="text-primary" href="mailto:hello@example.com">hello@example.com</a>.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
