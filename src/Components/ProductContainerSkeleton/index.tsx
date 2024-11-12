import { Box, Container, Grid2 } from "@mui/material"
import ProductSkeleton from "../ProductSkeleton"

function ProductContainerSkeleton() {
    return <Grid2 size={{ xs: 12, md: 8 }} container spacing={2} >
        <Grid2 size={{ xs: 12, md: 4 }}>
            <ProductSkeleton />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
            <ProductSkeleton />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
            <ProductSkeleton />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
            <ProductSkeleton />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
            <ProductSkeleton />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
            <ProductSkeleton />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
            <ProductSkeleton />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
            <ProductSkeleton />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
            <ProductSkeleton />
        </Grid2>
    </Grid2>
}
export default ProductContainerSkeleton