'use client'
import { Container, Grid, Typography, Button, Box, Card, CardContent } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';


export default function HelpSection() {
    const faqs = [
        {
            question: 'How can I find a government-funded course?',
            answer:
                'Explore a range of government-funded courses across our platform. These fully funded opportunities help learners gain valuable qualifications, enhance career prospects, and develop in-demand skills through flexible learning options.',
        },
        { question: 'What types of qualifications can I study?' },
        { question: 'Am I eligible for funding?' },
        { question: 'What should I do if I can’t find my course?' },
        { question: 'Are all courses free?' },
    ]

    return (
        <Container sx={{ py: 10 }}>
            <Grid container spacing={6} alignItems="flex-start">
                {/* Left Column */}
                <Grid item xs={12} md={5}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            lineHeight: 1.2,
                        }}
                    >
                        Do you need — <br /> some help?
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            mb: 4,
                            maxWidth: 400,
                        }}
                    >
                        Didn’t find the answer you were looking for? Our team is here to help you
                        explore your options and check your eligibility.
                    </Typography>

                    <Button
                        component={Link}
                        href="/contact"
                        variant="contained"
                        endIcon={<ArrowCircleRightIcon />}
                        sx={{
                            borderRadius: '9999px',
                            textTransform: 'none',
                            backgroundColor: '#001e1d',
                            color: 'white',
                            px: 3.5,
                            py: 1.2,
                            fontWeight: 600,
                            '&:hover': { backgroundColor: '#00332f' },
                        }}
                    >
                        Contact us
                    </Button>
                </Grid>

                {/* Right Column */}
                <Grid item xs={12} md={7}>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            textTransform: 'uppercase',
                            color: 'text.secondary',
                            mb: 2,
                            letterSpacing: '0.05em',
                        }}
                    >
                        Questions and Answers
                    </Typography>

                    {faqs.map((faq, index) => (
                        <Card
                            key={index}
                            elevation={0}
                            sx={{
                                borderBottom: '1px solid #e0e0e0',
                                borderRadius: 0,
                                boxShadow: 'none',
                                backgroundColor: 'transparent',
                                py: 1,
                            }}
                        >
                            <CardContent sx={{ p: 0 }}>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        fontWeight: index === 0 ? 700 : 500,
                                        color: index === 0 ? 'primary.main' : 'text.primary',
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: index === 0 && faq.answer ? 1 : 0,
                                    }}
                                >
                                    {index === 0 && (
                                        <ArrowForwardIcon
                                            sx={{
                                                fontSize: 18,
                                                mr: 1,
                                                color: 'primary.main',
                                            }}
                                        />
                                    )}
                                    {faq.question}
                                </Typography>

                                {faq.answer && (
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            mb: 1.5,
                                            maxWidth: 600,
                                        }}
                                    >
                                        {faq.answer}
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </Grid>
            </Grid>
        </Container>
    )
}
