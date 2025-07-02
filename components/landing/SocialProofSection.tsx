const SocialProofSection = () => {
  const logos = ['Forbes', 'BBC', 'The Telegraph', 'The Guardian', 'Sky News'];

  return (
    <section className="py-12">
      <div className="container mx-auto max-w-6xl">
        <p className="mb-6 text-center text-sm font-semibold uppercase text-muted-foreground">
          As Seen On
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-2xl font-medium text-gray-400"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection; 