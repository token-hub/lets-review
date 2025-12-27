import Header from "@/components/common/header";
import ProgressProvider from "@/providers/progressProvider";

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <ProgressProvider>
            <div className="h-dvh">
                <Header />
                {children}
            </div>
        </ProgressProvider>
    );
};

export default RootLayout;
