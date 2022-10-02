import Image from "next/future/image";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { LandingLayout } from "../layouts/LandingLayout";

import { 
  HomeContainer, 
  HomeHeading, 
  NewsletterContainer, 
  SubscribersCountContainer 
} from "../styles/pages/home";

export default function Home() {
  const [email, setEmail] = useState('')

  function handleSubscribeInNewsletter(e: FormEvent) {
    e.preventDefault()

    if (email.trim() !== '') {
      alert(email)
    }

    setEmail('')
  }

  return (
    <LandingLayout>
      <HomeContainer>
        <section>
          <Image 
            src="/dog-food.svg" 
            alt="dog food ilustration" 
            width={396} 
            height={276} 
            className="dog-food-1"
          />

          <Image 
            src="/dog-food-2.svg" 
            alt="dog food 2 ilustration" 
            width={396} 
            height={276} 
            className="dog-food-2"
          />

          <Image 
            src="/dog-bath.svg" 
            alt="dog bath ilustration" 
            width={726} 
            height={822} 
            className="dog-bath"
          />

          <HomeHeading>
            <h1>Cuide bem do seu <span>amiguinho</span></h1>

            <p>
              Faça seu cachorro mais feliz, através de dicas de alimentação, banho, sono, passeio e muito mais.
            </p>
          </HomeHeading>

          <NewsletterContainer>
            <span>Inscreva-se na nossa newsletter</span>

            <form onSubmit={handleSubscribeInNewsletter}>
              <input 
                type="email" 
                placeholder="Seu email"
                onChange={e => setEmail(e.target.value)}
                value={email} 
              />

              <Button 
                label="Inscrever-se" 
                variant="purple" 
                type="submit" 
              />
            </form>
          </NewsletterContainer>

          <SubscribersCountContainer>
            <div className="images">
              <Image src="/woman-01.png" alt="foto 1" width={120} height={120} />
              <Image src="/woman-02.png" alt="foto 2" width={120} height={120} />
              <Image src="/woman-03.png" alt="foto 3" width={120} height={120} />
            </div>

            <div className="texts">
              <strong>2500+</strong>
              
              <p>Inscritos consomem o nosso conteúdo</p>
            </div>
          </SubscribersCountContainer>
        </section>
      </HomeContainer>
    </LandingLayout>
  )
}

