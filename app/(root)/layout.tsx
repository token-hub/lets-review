import Header from "@/components/common/header";

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="h-dvh">
            <Header />
            {children}
        </div>
    );
};

export default RootLayout;
