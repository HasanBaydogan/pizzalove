import { useEffect } from "react";
import privacyContent from "../../data/privacyContent";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy | Pizza Time";
  }, []);
  return (
    <main className="terms">
      <h2>Gizlilik</h2>
      <p>
        Bu Gizlilik Politikası ("Politika"), Pizza Time'ın ("Pizza Time", "biz",
        "bizim" veya "bize") Instagram büyüme hizmetlerimizi kullandığınızda
        kişisel bilgilerinizi nasıl topladığını, kullandığını ve koruduğunu
        özetlemektedir. Hizmetlerimizi kullanarak, siz ("siz", "sizin" veya
        "kullanıcı") bu Politikada açıklanan uygulamaları kabul etmiş olursunuz.
      </p>
      {privacyContent.map((content) => (
        <section key={content.title}>
          <h3>
            {content.id}. {content.title}:
          </h3>
          <p>{content.content}</p>
        </section>
      ))}
      <p>
        Gizlilik Politikamızla ilgili herhangi bir sorunuz veya endişeniz varsa,
        lütfen info@pizzalove.com adresinden bizimle iletişime geçin. Pizza'ya
        güvendiğiniz için teşekkür ederiz Kişisel bilgilerinizle zaman geçirin.
      </p>
    </main>
  );
};

export default Privacy;
