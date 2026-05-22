import BookingForm from '@/components/form/BookingForm';
import { getAnimalsById} from '@/lib/data';


const BookingFormPage = async ({ params }) => {

    const { id } = await params;
    const animal = await getAnimalsById(id);
    // console.log(animal);


    return (
       <div>
            <BookingForm animal={animal}></BookingForm>
       </div>
    );
};

export default BookingFormPage;