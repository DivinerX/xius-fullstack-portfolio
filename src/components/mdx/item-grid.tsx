import Image from './image'

/**
 * The items to map in {@link ItemGrid}.
 */
export type Items = Array<{
  /**
   * The image of the item.
   */
  image: string
  /**
   * The name of the item.
   */
  name: string
  /**
   * The description of the item.
   */
  description: string
  /**
   * The URL of the item.
   */
  url: string
}>

/**
 * The props of {@link ItemGrid}.
 */
type ItemGridProps = {
  /**
   * The items to map.
   */
  items: Items
}

const ItemGrid = (props: ItemGridProps) => {
  const { items } = props

  return (
    <div className='mb-9 grid grid-cols-1 gap-4 sm:grid-cols-4'>
      {items.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target='_blank'
          rel='noopener noreferrer'
          className='flex gap-6 rounded-lg border p-4 no-underline transition-colors duration-150 hover:bg-accent sm:flex-col sm:gap-3'
        >
          <Image
            src={item.image}
            width={30}
            height={30}
            alt={item.name}
            className='shrink-0'
            imageClassName='m-0 h-24 w-24 sm:h-full sm:w-full'
          />
        </a>
      ))}
    </div>
  )
}

export default ItemGrid
