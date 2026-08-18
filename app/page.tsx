import Image from "next/image";
import Header from "./_components/header";
import SearchInput from "./_components/search-input";
import banner from "../public/banner.png";
import BookingItem from "./_components/booking-item";
// import { prisma } from "@/lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
// import Footer from "./_components/footer";
// import {
//   PageContainer,
//   PageSection,
//   PageSectionScroller,
//   PageSectionTitle,
// } from "./_components/ui/page";
// import QuickSearchButtons from "./_components/quick-search-buttons";

const Home = () => {
  return (
    <main className="min-h-screen pb-20">
      <Header />
      <div className="px-5 space-y-4">
        <SearchInput />
          <Image
            src={banner}
            alt="Agende agora!"
            sizes="100vw"
            className="h-auto w-full"
          />
          <h2 className="text-xs text-foreground font-semibold uppercase">Agendamentos</h2>
          <BookingItem
            serviceName="Corte de Cabelo"
            barbershopName="Barbearia do Jorge"
            barbershopImageUrl="https://utfs.io/f/e995db6d-df96-4658-99f5-11132fd931e1-17j.png"
            date={new Date()}
          />
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
