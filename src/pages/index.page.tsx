import {Button} from "@/components/button/Button";

const HomePage = ()  => {
    return <div>
        <Button label='hello' color='Primary' extended={true} />
        <Button label='hello' color='Secondary' extended={false} />
        <Button label='hello' color='Tertiary' extended={true} />
        <Button label='hello' color='Primary' extended={false} />
    </div>;
};

export default HomePage;
