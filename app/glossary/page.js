"use client";

import LearningJourneySection from "../../components/LearningJourneySection";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";


const glossaryItems = [
  // === Existing Data ===
  {
    title: "Learning Aims",
    description:
      "Unique identifiers assigned to individual qualifications or learning units within the LARS database.",
  },
  {
    title: "Active Learning Aims",
    description:
      "Learning aims currently in delivery with valid operational start and certification end dates.",
  },
  {
    title: "Inactive Learning Aims",
    description:
      "Learning aims that are no longer active, often due to withdrawal, expiry, or certification closure.",
  },
  {
    title: "Sector Subject Area Code 1",
    description:
      "Broad classification code defining the major subject area of a qualification.",
  },
  {
    title: "Sector Subject Area Code 2",
    description:
      "More detailed sub-category code refining the classification within Sector Subject Area Code 1.",
  },
  {
    title: "Learning Aim Levels",
    description:
      "Represents the difficulty level of a qualification (e.g. Entry Level, Level 1 to Level 8).",
  },
  {
    title: "Awarding Body",
    description:
      "An organisation authorised to develop and award qualifications.",
  },
  {
    title: "General Categories",
    description:
      "A broad classification of the type or nature of the qualification (e.g., Functional Skills, GCSE).",
  },
  {
    title: "Funding Category",
    description:
      "Classification of qualifications based on funding eligibility (e.g. Adult Skills Fund, Apprenticeships).",
  },
  {
    title: "Source Qual Type",
    description:
      "Origin of qualification data such as Ofqual (regulator), Awarding Org (developer), SFA (funding), or QAA (Higher Education).",
  },
  {
    title: "Unit Type",
    description:
      "Defines whether a learning aim is a Unit, Full Qualification, or Component Class.",
  },
  {
    title: "Guided Learning Hours (GLH)",
    description:
      "Number of hours a learner is taught under direct guidance or supervision.",
  },

  // === New Data Added ===
  {
    title: "Qualification Time",
    description:
      "Total time required to achieve a qualification, including guided and independent learning.",
  },
  {
    title: "Learn Aim Ref Type",
    description:
      "Specifies whether the reference is a learning aim, unit, or component.",
  },
  {
    title: "Operational Start Date",
    description:
      "The date from which a learning aim is available for delivery and funding.",
  },
  {
    title: "Certification End Date",
    description:
      "The final date learners can be awarded the qualification.",
  },
  {
    title: "Learn Direct Class System (LDCS) Codes",
    description:
      "Codes representing learning aim subject classifications, used for funding and reporting.",
  },
  {
    title: "HECOS Codes",
    description:
      "Higher Education Classification of Subjects codes used in HE qualification mapping.",
  },
  {
    title: "Funding Types",
    description:
      "Direct Funded: Fully funded by the government. Reimbursement Funded: Providers reimbursed based on delivery. Learner Funded: Cost borne by learner. Self-Funded: Learner or employer covers cost.",
  },
  {
    title: "Rate Weighted",
    description:
      "Funding value adjusted with weighting for certain subject or delivery factors.",
  },
  {
    title: "Rate Unweighted",
    description:
      "Base funding value without adjustment.",
  },
  {
    title: "Weighting Factor",
    description:
      "A multiplier used to adjust funding based on difficulty or delivery context.",
  },
  {
    title: "Funded Guided Learning Hours",
    description:
      "GLH specifically eligible for funding within a given category.",
  },
  {
    title: "Adult Skills Funding Band",
    description:
      "Funding cap band based on adult skills qualifications, size, and complexity.",
  },
  {
    title: "Frameworks",
    description:
      "Structured training programmes, often used in apprenticeships, containing pathways and qualifications.",
  },
  {
    title: "Pathway",
    description:
      "Specific route within a framework focusing on a role or occupational area.",
  },
  {
    title: "Program Types",
    description:
      "Type of learning programme (e.g., Apprenticeships, Traineeships, Classroom Based Learning).",
  },
  {
    title: "Common Components",
    description:
      "Shared or mandatory units across multiple qualifications or pathways.",
  },
  {
    title: "Issuing Authority",
    description:
      "The body responsible for maintaining the qualification specification.",
  },
  {
    title: "Awarding Body Types",
    description:
      "Classification of awarding bodies (e.g. Ofqual Regulated, Higher Education, Sector Specific).",
  },
  {
    title: "Active Awarding Bodies",
    description:
      "Awarding bodies currently offering qualifications.",
  },
  {
    title: "CCEA Awarding Bodies",
    description:
      "Bodies regulated by the Council for the Curriculum, Examinations & Assessment (Northern Ireland).",
  },
  {
    title: "Ofqual Awarding Bodies",
    description:
      "Awarding organisations regulated by Ofqual in England.",
  },
  {
    title: "Higher Education Awarding Bodies",
    description:
      "HE institutions awarding recognised degrees (often linked with QAA).",
  },
  {
    title: "Other Awarding Bodies",
    description:
      "Organisations outside standard regulators (e.g., professional bodies or legacy institutions).",
  },
  {
    title: "Learning Delivery Type",
    description:
      "Mode of course delivery (e.g., classroom, blended, work-based).",
  },
  {
    title: "Regulation Status",
    description:
      "Indicates if a qualification is regulated, non-regulated, or withdrawn.",
  },
  {
    title: "Funding Eligibility",
    description:
      "Status of a qualification’s eligibility for funding streams.",
  },
  {
    title: "Tiers or Tier Code",
    description:
      "Grouping of qualifications into tiers for reporting or analysis.",
  },
  {
    title: "Validity Period",
    description:
      "Duration for which the qualification is valid (between operational start and certification end).",
  },
];

export default function GlossaryPage() {
  return (
    <>
    <Box sx={{ backgroundColor: "#fff", minHeight: "100vh", py: 10 }}>
      {/* Header Container */}
      <Container maxWidth="md" sx={{ textAlign: "center", mb: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, color: "#001E1D", mb: 1 }}>
          Glossary
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "text.secondary",
            fontSize: "1.1rem",
            maxWidth: 700,
            mx: "auto",
          }}
        >
          Welcome to the Glossary — your quick guide to key terms, concepts, and abbreviations used across our platform.
        </Typography>
      </Container>

      {/* Cards Container */}
      <Container maxWidth="xl">
        <Grid container  rowSpacing={3} columnSpacing={0}>
          {glossaryItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}  ml={12} mr={-10} sx={{width:"22%"}}>
              <Card
                sx={{
                  borderRadius: "20px",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.08)",
                  height: "100%",
                  transition: "transform 0.2s ease",
                  width:"100%",
                  bgcolor:"#F5F5F5",
                  "&:hover": { transform: "translateY(-4px)" },
                  
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" fontSize={15}fontWeight={900}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    <LearningJourneySection imageSrc={"/glossaryImg.webp"} ></LearningJourneySection>
    </>
  );
}
