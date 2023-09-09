import {Button} from "@/components/button/Button";
import {useRouter} from 'next/router'

const HomePage = ()  => {
    const router = useRouter();

    return <div>
        <Button
            label='hello'
            color='Primary'
            extended={true}
            onClick={() => router.push('/information')}/>
    </div>;
};

export default HomePage;
