import Image from "next/image";
import Header from "./_components/header";
import SearchInput from "./_components/search-input";
import banner from "../public/banner.png";
import BookingItem from "./_components/booking-item";
import { prisma } from "@/lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
// import Footer from "./_components/footer";
// import {
//   PageContainer,
//   PageSection,
//   PageSectionScroller,
//   PageSectionTitle,
// } from "./_components/ui/page";
// import QuickSearchButtons from "./_components/quick-search-buttons";

const Home = async () => {
  // Pega todas as barbearias
  const recommendedBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "asc",
    },
  });
  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });
  return (
    <main className="min-h-screen pb-20">
      <Header />
      <div className="p-5 space-y-4">
        <SearchInput />
          <Image
            src={banner}
            alt="Agende agora!"
            sizes="100vw"
            className="h-auto w-full"
          />

          {/* AGENDAMENTOS */}
          <h2 className="text-xs text-foreground font-semibold uppercase">Agendamentos</h2>
          <BookingItem
            serviceName="Corte de Cabelo"
            barbershopName="Barbearia do Jorge"
            barbershopImageUrl="https://utfs.io/f/e995db6d-df96-4658-99f5-11132fd931e1-17j.png"
            date={new Date()}
          />

      {/* RECOMENDADOS */}
      <h2 className="text-xs text-foreground font-semibold uppercase">Recomendados</h2>
          {/* Deixa as imagens lado a lado, com navegação horizontal.
              [&::-webkit-scrollbar]:hidden = esconde a barra de rolagem das imagens
          */}
          <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {/* Expõe as barbearias do banco de dados  */}
            {recommendedBarbershops.map((barbershop) => (
              // renderiza as imagens das barbearias
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
          
      {/* POPULARES */}
      <h2 className="text-xs text-foreground font-semibold uppercase">Recomendados</h2>
          <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {popularBarbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
      </div>
    </main>
  );
};


// const Home = async () => {
//   const recommendedBarbershops = await prisma.barbershop.findMany({
//     orderBy: {
//       name: "asc",
//     },
//   });
//   const popularBarbershops = await prisma.barbershop.findMany({
//     orderBy: {
//       name: "desc",
//     },
//   });
//   return (
//     <main>
//       <Header />
//       <PageContainer>
//         <SearchInput />

//         <QuickSearchButtons />

//         <Image
//           src={banner}
//           alt="Agende agora!"
//           sizes="100vw"
//           className="h-auto w-full"
//         />

//         <PageSection>
//           <PageSectionTitle>Recomendados</PageSectionTitle>
//           <PageSectionScroller>
//             {recommendedBarbershops.map((barbershop) => (
//               <BarbershopItem key={barbershop.id} barbershop={barbershop} />
//             ))}
//           </PageSectionScroller>
//         </PageSection>

//         <PageSection>
//           <PageSectionTitle>Populares</PageSectionTitle>
//           <PageSectionScroller>
//             {popularBarbershops.map((barbershop) => (
//               <BarbershopItem key={barbershop.id} barbershop={barbershop} />
//             ))}
//           </PageSectionScroller>
//         </PageSection>
//       </PageContainer>
//       <Footer />
//     </main>
//   );
// };

export default Home;
