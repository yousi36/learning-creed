// "use client";
// import { Box, Typography, Container } from "@mui/material";
// import Image from "next/image";
// export default function CareersPage() {
//   return (
//     <Box
//       sx={{
//         bgcolor: "#94a79cff",
//         minHeight: "100vh",
//         width:"70vw",
//         pt: 10,
//         pb: 8,
//         border:"1px solid black",
//         mb:-40,
//         mt:20,
//         ml:40,
//       }}
//     >
//       {/* Page Header Section */}
//       <Container maxWidth="md" sx={{ textAlign: "center" }}>
//         <Typography
//           variant="h3"
//           sx={{
//             fontWeight: 700,
//             mb: 1,
//             color: "#001E1D",
//           }}
//         >
//           Careers
//         </Typography>

//         <Typography
//           variant="subtitle1"
//           sx={{
//             color: "text.secondary",
//             maxWidth: "700px",
//             mx: "auto",
//             fontSize: "1.1rem",
//           }}
//         >
//           Join Learning Creed and help shape the future of funded education
//           across the UK.
//         </Typography>
//       </Container>

//       {/* Banner Image Section */}
//       <Container
//         maxWidth="md"
//         sx={{
//           mt: 6,
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <Box
//           sx={{
//             position: "relative",
//             width: "100%",
//             height: { xs: 220, sm: 320, md: 420 },
//             borderRadius: "20px",
//             overflow: "hidden",
//             boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
//           }}
//         >
//           <Image
//             src="/careers.webp"
//             alt="Career growth illustration"
//             fill
//             style={{ objectFit: "cover" }}
//             priority
//           />
//         </Box>
//       </Container>
//     </Box>
//   );
// }

"use client";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
export default function CareersPage() {
  return (
    <Box
      sx={{
        bgcolor: "#EDFCF4",
        width:"70vw",
        pt: 0,
        pb: 8,
        borderRadius:"40%",
        mt:20,
        ml:40,
      }}
    >
      {/* Page Header Section */}
      <Container  sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 500,
            fontSize:"5rem",
            mb: 1,
            color: "#001E1D",
          }}
        >
          Careers
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: "text.secondary",
            maxWidth: "700px",
            mx: "auto",
            fontSize: "1.1rem",
          }}
        >
          Join Learning Creed and help shape the future of funded education
          across the UK.
        </Typography>
      </Container>

      {/* Banner Image Section */}
      <Container
        sx={{
          mt: 6,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 220, sm: 320, md: 600 },
            borderRadius: "20px",
            // overflow: "hidden",
            
            boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
          }}
        >
          <Image
            src="/careers.webp"
            alt="Career growth illustration"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </Box>
      </Container>
    </Box>
  );
}
