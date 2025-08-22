import NavBar from "@/components/NavBar";

export default function Layout({ children }) {
    return (
        <main className="min-h-screen">
            <NavBar/>
            {children}
        </main>
    )
}