import CategoryCarousel from "./(categorySlider)/CategoryCarousel";
import GiftOffers from "./(giftOffers)/GiftOffers";

function CategorySection() {
  // const categories= [
  //     {
  //         "_id": "673c46fd1159920171827c85",
  //         "name": "flowers",
  //         "slug": "flowers",
  //         "image": "https://flower.elevateegy.com/uploads/39c641a6-4ec4-421a-8f55-5d8f5eeba5c3-flowers.png",
  //         "createdAt": "2024-11-19T08:06:21.263Z",
  //         "updatedAt": "2024-11-19T08:06:21.263Z",
  //         "productsCount": 8
  //     },
  //     {
  //         "_id": "673c472f1159920171827c8a",
  //         "name": "gifts",
  //         "slug": "gifts",
  //         "image": "https://flower.elevateegy.com/uploads/79af9251-8534-4d50-8346-160f30589268-gift.png",
  //         "createdAt": "2024-11-19T08:07:11.634Z",
  //         "updatedAt": "2024-11-19T08:07:11.634Z",
  //         "productsCount": 0
  //     },
  //     {
  //         "_id": "673c47441159920171827c8d",
  //         "name": "elctroots",
  //         "slug": "elctroots",
  //         "image": "https://flower.elevateegy.com/uploads/06dfd914-95b2-4832-91d1-9affabe9fbd6-card.png",
  //         "createdAt": "2024-11-19T08:07:32.412Z",
  //         "updatedAt": "2025-02-24T19:41:32.933Z",
  //         "productsCount": 0
  //     },
  //     {
  //         "_id": "673c47591159920171827c90",
  //         "name": "Jewellery",
  //         "slug": "jewellery",
  //         "image": "https://flower.elevateegy.com/uploads/381400d6-95e3-4dcc-811f-2ff430c53d21-Jewellery.png",
  //         "createdAt": "2024-11-19T08:07:53.579Z",
  //         "updatedAt": "2024-11-19T08:07:53.579Z",
  //         "productsCount": 0
  //     },
  //     {
  //         "_id": "673c47751159920171827c93",
  //         "name": "perfumes",
  //         "slug": "perfumes",
  //         "image": "https://flower.elevateegy.com/uploads/eac4f4a6-da5e-4e4a-8223-0f1a7a9993c6-perfumes.png",
  //         "createdAt": "2024-11-19T08:08:21.444Z",
  //         "updatedAt": "2024-11-19T08:08:21.444Z",
  //         "productsCount": 0
  //     },
  //     {
  //         "_id": "673c47881159920171827c96",
  //         "name": "watches",
  //         "slug": "watches",
  //         "image": "https://flower.elevateegy.com/uploads/98d9daf2-d4d8-4cf8-91ae-7f7d35ddb22c-watches.png",
  //         "createdAt": "2024-11-19T08:08:40.747Z",
  //         "updatedAt": "2024-11-19T08:08:40.747Z",
  //         "productsCount": 0
  //     },
  //     {
  //         "_id": "673c479e1159920171827c99",
  //         "name": "chocolate",
  //         "slug": "chocolate",
  //         "image": "https://flower.elevateegy.com/uploads/4a6586c0-9b1b-4009-b8c0-121de16f0bea-chocolate.png",
  //         "createdAt": "2024-11-19T08:09:02.186Z",
  //         "updatedAt": "2024-11-19T08:09:02.186Z",
  //         "productsCount": 4
  //     },
  //     {
  //         "_id": "673c4a551159920171827c9e",
  //         "name": "Cakes",
  //         "slug": "cakes",
  //         "image": "https://flower.elevateegy.com/uploads/8cf2d065-2e52-490a-9a8c-1b75edd5633a-cakes.png",
  //         "createdAt": "2024-11-19T08:20:37.774Z",
  //         "updatedAt": "2024-11-19T08:20:37.774Z",
  //         "productsCount": 0
  //     },
  //     {
  //         "_id": "673c4a6f1159920171827ca1",
  //         "name": "Plants",
  //         "slug": "plants",
  //         "image": "https://flower.elevateegy.com/uploads/ebc124bd-979d-4d7a-abcf-e87d6ef388bf-plants.png",
  //         "createdAt": "2024-11-19T08:21:03.123Z",
  //         "updatedAt": "2024-11-19T08:21:03.123Z",
  //         "productsCount": 0
  //     },
  //     {
  //         "_id": "673c4a851159920171827ca4",
  //         "name": "Candles & Diffusers",
  //         "slug": "candles-and-diffusers",
  //         "image": "https://flower.elevateegy.com/uploads/cbeff909-1711-4f77-9861-76bf6acc74eb-Candles & Diffusers.png",
  //         "createdAt": "2024-11-19T08:21:25.232Z",
  //         "updatedAt": "2024-11-19T08:21:25.232Z",
  //         "productsCount": 0
  //     }
  // ]
  return (
    <div className=" container mx-auto">
      <main className=" px-4 2xl:px-20  mt-4 mb-6">
        <CategoryCarousel />
        <GiftOffers />

        
      </main>
    </div>
  );
}

export default CategorySection;
