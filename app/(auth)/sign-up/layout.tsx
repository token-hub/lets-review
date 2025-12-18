const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <div className="h-dvh">{children}</div>;
};

export default RootLayout;
