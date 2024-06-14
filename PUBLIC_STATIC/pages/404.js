export default function Custom404() {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="flex space-x-2 items-center font-mono">
                <div className="text-3xl font-bold border-r-2 border-elevated pr-4">404</div>
                <div className="text-lg pl-2 text-secondary">This page could not be found.</div>
            </div>
        </div>
    )
}