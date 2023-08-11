import Input from '@/components/Input'
import Textarea from '@/components/Textarea'

const AddComment = () => {
  return (
    <div className='w-full rounded-md shadow-outer bg-white overflow-hidden p-7'>
      <div className='flex flex-col gap-5'>
        <div className='text-2xl text-gray-500'>Leave A Comment</div>
        <div className='flex flex-col justify-between items-center gap-5 md:flex-row'>
          <div className='w-full md:w-1/2'>
            <Input classNameInput='outline-none bg-gray-100 w-full' placeholder='Email *' />
          </div>
          <div className='w-full md:w-1/2'>
            <Input classNameInput='outline-none bg-gray-100 w-full' placeholder='Name *' />
          </div>
        </div>
        <div>
          <Textarea
            placeholder='Comment *'
            classNameInput='w-full outline-none bg-gray-100 resize-none'
          />
        </div>
        <div>
          <button className='w-full flex items-center justify-center py-2 md:w-[250px] bg-primary text-white rounded-full'>
            Post Comment
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddComment
