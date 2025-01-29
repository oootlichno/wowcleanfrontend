import React from "react";
import shape from "../img/Shape.png";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      {/* Background Shape */}
      <div class="shape-container">
        <img src={shape} alt="Background Shape" className="shape-image-about" />
      </div>
      <div className="policy-text">
        <h1>Polityka prywatności</h1>
        <p>
          Witamy w WoWClean. Cenimy Twoją prywatność i zobowiązujemy się do
          ochrony Twoich danych osobowych. Niniejsza Polityka prywatności
          opisuje sposób, w jaki zbieramy, wykorzystujemy i chronimy Twoje dane,
          gdy korzystasz z naszych usług.
        </p>

        <h3>1. Informacje, które zbieramy</h3>
        <p>Zbieramy następujące rodzaje informacji:</p>
        <ul>
          <li>
            <strong>Dane osobowe:</strong> Twoje imię i nazwisko, adres e-mail,
            numer telefonu oraz inne dane kontaktowe podane za pośrednictwem
            naszych formularzy lub kanałów komunikacji.
          </li>
          <li>
            <strong>Informacje dotyczące usług:</strong> Szczegóły dotyczące
            zamówionych usług, w tym preferencje dotyczące sprzątania,
            informacje o nieruchomości oraz dane płatnicze.
          </li>
          <li>
            <strong>Dane o użytkowaniu:</strong> Informacje o Twoich
            interakcjach z naszą stroną internetową, takie jak adres IP, typ
            przeglądarki i odwiedzane strony, zbierane za pomocą plików cookies
            i podobnych technologii.
          </li>
        </ul>

        <h3>2. Jak wykorzystujemy Twoje dane</h3>
        <p>Zebrane informacje wykorzystujemy do:</p>
        <ul>
          <li>
            Świadczenia i zarządzania naszymi usługami, w tym planowania i
            realizacji sprzątania.
          </li>
          <li>Komunikacji z Tobą w sprawie zapytań, rezerwacji i opinii.</li>
          <li>
            Udoskonalania naszej strony internetowej i usług poprzez analizę
            danych i opinie użytkowników.
          </li>
          <li>
            Zapewnienia zgodności z obowiązującymi przepisami prawa oraz ochrony
            przed działaniami oszukańczymi.
          </li>
        </ul>

        <h3>3. Udostępnianie Twoich danych</h3>
        <p>
          Nie sprzedajemy ani nie udostępniamy Twoich danych osobowych osobom
          trzecim, z wyjątkiem następujących przypadków:
        </p>
        <ul>
          <li>
            Gdy wymagają tego przepisy prawa lub konieczne jest egzekwowanie
            naszych warunków korzystania z usług.
          </li>
          <li>
            Gdy współpracujemy z zaufanymi dostawcami usług (np. procesorami
            płatności), którzy pomagają w realizacji naszych usług i zobowiązują
            się do zachowania poufności Twoich danych.
          </li>
        </ul>

        <h3>4. Bezpieczeństwo danych</h3>
        <p>
          Wdrażamy odpowiednie środki techniczne i organizacyjne, aby chronić
          Twoje dane przed nieuprawnionym dostępem, utratą lub niewłaściwym
          wykorzystaniem. Jednak żadna metoda transmisji ani przechowywania
          danych nie jest w 100% bezpieczna, dlatego nie możemy zagwarantować
          absolutnego bezpieczeństwa.
        </p>

        <h3>5. Twoje prawa</h3>
        <p>Masz prawo do:</p>
        <ul>
          <li>
            Uzyskania dostępu do swoich danych osobowych i otrzymania ich kopii.
          </li>
          <li>Zażądania poprawienia nieścisłości w swoich danych osobowych.</li>
          <li>
            Zażądania usunięcia swoich danych osobowych, pod warunkiem zgodności
            z obowiązującymi przepisami prawa.
          </li>
          <li>
            Wycofania zgody na przetwarzanie danych tam, gdzie jest to możliwe.
          </li>
        </ul>

        <h3>6. Pliki cookies</h3>
        <p>
          Nasza strona internetowa wykorzystuje pliki cookies w celu poprawy
          komfortu przeglądania. Cookies to małe pliki tekstowe przechowywane na
          Twoim urządzeniu, które zbierają standardowe informacje dotyczące
          logowania do internetu i zachowania użytkowników. Możesz zarządzać
          swoimi preferencjami dotyczącymi plików cookies w ustawieniach swojej
          przeglądarki.
        </p>

        <h3>7. Zmiany w Polityce Prywatności</h3>
        <p>
          Możemy okresowo aktualizować niniejszą Politykę Prywatności. Wszelkie
          zmiany zostaną opublikowane na tej stronie wraz z datą aktualizacji.
        </p>

        <h3>8. Kontakt</h3>
        <p>
          Jeśli masz pytania lub wątpliwości dotyczące niniejszej Polityki
          Prywatności lub naszych praktyk w zakresie ochrony danych, skontaktuj
          się z nami pod adresem:
        </p>

        <p>
          Email: <a href="mailto:help@wowclean.com">help@wowclean.com</a>
        </p>
        <p>Numer telefonu: +48 (734) 126-837</p>
        <p>Adres biura: Puławska 233, 02-715 Warsaw, Poland</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
