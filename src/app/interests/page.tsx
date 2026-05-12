import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interests",
  description: "Research areas and topics I care about.",
};

export default function InterestsPage() {
  return (
    <div className="max-w-[680px]">
      <h1 className="text-3xl font-semibold font-sans tracking-tight mb-8">
        Interests
      </h1>

      <div className="prose">
        <p>
          My research spans applied mathematics, with a focus on areas where
          mathematical modeling meets computation. Here are some of the topics
          I care about.
        </p>

        <h2>Research Areas</h2>
        <ul>
          <li>
            <strong>Numerical Methods</strong> — developing and analyzing
            algorithms for solving partial differential equations and other
            continuous problems.
          </li>
          <li>
            <strong>Mathematical Modeling</strong> — translating real-world
            phenomena into mathematical frameworks, particularly in physics and
            biology.
          </li>
          <li>
            <strong>High-Performance Computing</strong> — designing scalable
            parallel algorithms and leveraging GPU acceleration for scientific
            computation.
          </li>
          <li>
            <strong>Uncertainty Quantification</strong> — understanding how
            uncertainty in model inputs propagates to outputs, using Bayesian
            and frequentist approaches.
          </li>
        </ul>

        <h2>Tools & Languages</h2>
        <p>
          I work primarily in Python (NumPy, SciPy, JAX) and C++ for
          performance-critical code. I use Julia for exploratory work and
          Matplotlib for most of my visualizations.
        </p>

        <h2>Beyond Research</h2>
        <p>
          I&apos;m interested in scientific communication — making mathematical
          ideas accessible without sacrificing rigor. I believe good
          visualizations are central to this, which is why many of my posts
          feature animated diagrams.
        </p>
        <p>
          Outside of math, I enjoy [your other interests here: hiking,
          photography, chess, etc.].
        </p>
      </div>
    </div>
  );
}
