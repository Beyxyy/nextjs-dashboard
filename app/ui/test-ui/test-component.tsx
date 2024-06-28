

export default function TestComponent(){

    const getContent= () => {
        return <p> Custom Test Page</p>;
    }

    return (
        <>
            <h1>
                {getContent()}
            </h1> 
        </>
    )

}