export default function authLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="w-full max-w-md p-4 bg-white shadow rounded-lg">
                {children}
            </div>
        </div>
    );
}