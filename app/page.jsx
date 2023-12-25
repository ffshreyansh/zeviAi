import { faker } from '@faker-js/faker';

export default function Home() {
  console.log('fkr', faker.commerce.product());

  return (
    <div className='w-full h-screen p-10 overflow-hidden bgg'>
        <img src="/zevi.webp" width={80} alt="zevi logo" className='ml-auto' />
        <div className='w-full '>
            <div className='w-2/3 flex items-center justify-between bg-white'>
                <input type="text" name="" id="" />

            </div>
        </div>
    </div>
  );
}
