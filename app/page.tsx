import { StarIcon } from 'lucide-react'
import { PropsWithChildren } from 'react'

interface IProps {
  rating: number
}

interface ICardProps extends PropsWithChildren<{}> {
  author: string;
  rating: number;
}

export default function Home() {


  return (
    <main className="">
      <section className="container py-10 px-10">
        <h1 className="text-2xl text-slate-500 font-bold mb-5">What our customers say...</h1>

        <h2 className="text-sm text-slate-500 font-bold mb-5">These guys were unbelievable. The service ...</h2>

        <div className='mb-10'>
          <span className="font-bold text-slate-500">Tracey S</span>

          <Stars
            rating={5}
          />

        </div>


        <div className='flex gap-5'>
          {/* first card */}
          <Card author="Maria B." rating={4}>
            this is review 1
          </Card>
          <Card author="Lucy C." rating={5}>
            this is review 2
          </Card>
          <Card author="Tim E." rating={3}>
            this is review 3
          </Card>
          <Card author="Andy H." rating={2}>
            this is review 4
          </Card>
        </div>
      </section>
    </main>
  );
}


const Stars: React.FC<IProps> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        // i // 0, 1, 2, 3, 4
        const isFilled = true // <---
        if (i < rating) {
          return (
            <StarIcon key={i} className='text-yellow-500' fill="currentColor"></StarIcon>
          )
        } else {
          return (
            <StarIcon key={i} className='text-yellow-500' fill="transparent"></StarIcon>
          )
        }

      })}
    </div>
  )
}


const Card: React.FC<ICardProps> = ({ author, rating, children }) => {
  return (
    <div className='bg-slate-200 rounded-sm p-5'>
      <p className='mb-2'>
        {children}
      </p>
      <div className='flex justify-between'>
        <span>{author}</span>
        <Stars
          rating={rating}
        />
      </div>
    </div>
  )
}



// npm i lucide-react
