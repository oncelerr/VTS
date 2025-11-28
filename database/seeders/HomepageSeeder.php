<?php

namespace Database\Seeders;

use App\Models\Homepage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HomepageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Clear existing data
        Homepage::truncate();

        // Hero Data
        Homepage::create([
            'section_name' => 'hero',
            'data' => [
                'name' => 'Where Human Intelligence',
                'span' => 'Powers Digital Performance',
                'p' => 'From recruitment to operational excellence, we help you build AI-ready, judgment-driven teams in the Philippines so you can scale with quality, agility, and innovation — fast.',
                'solidBtn' => 'Start Building Your Team',
                'hollowBtn' => 'Learn How We Work',
                'img1' => '../Assets/ppl.jpg',
                'img2' => '../Assets/ppl.jpg',
                'img3' => '../Assets/ppl.jpg',
                'img4' => '../Assets/ppl.jpg',
                'img5' => '../Assets/ppl.jpg'
            ],
            'is_active' => true
        ]);

        // Marquee Images
        Homepage::create([
            'section_name' => 'marquee_images',
            'data' => [
                ['id' => 1, 'img' => '../Assets/brandlog.png'],
                ['id' => 2, 'img' => '../Assets/brandlog1.png'],
                ['id' => 3, 'img' => '../Assets/brandlog2.png'],
                ['id' => 4, 'img' => '../Assets/brandlog3.png'],
                ['id' => 5, 'img' => '../Assets/brandlog4.png'],
                ['id' => 6, 'img' => '../Assets/brandlog5.png'],
                ['id' => 7, 'img' => '../Assets/brandlog6.png'],
                ['id' => 8, 'img' => '../Assets/brandlog7.png']
            ],
            'is_active' => true
        ]);

        // Achievements Data
        Homepage::create([
            'section_name' => 'achievements',
            'data' => [
                ['id' => 1, 'title' => '3x Fast', 'subtitle' => 'Placement Speed'],
                ['id' => 2, 'title' => '5000+', 'subtitle' => 'Digital-Ready Hires'],
                ['id' => 3, 'title' => 'Top 1%', 'subtitle' => 'BPOs Trust Us'],
                ['id' => 4, 'title' => '20%', 'subtitle' => 'Retention Rates']
            ],
            'is_active' => true
        ]);

        // About Data
        Homepage::create([
            'section_name' => 'about',
            'data' => [
                'title' => 'Who',
                'span' => 'we are.',
                'subtitle' => 'Vertical Talent Solution is a Philippines-based talent solutions firm with over 20 years of experience helping startups, scaling and multinational corporations build high-performing teams. <br /><br />We support diverse industries—including E-commerce, Financial Technology, Social Media and Digital Communities, Trust and Safety,  Travel and Mobility, and Education Technology—across the US, Europe, Australia, and delivering talent solutions that drive growth and global impact.'
            ],
            'is_active' => true
        ]);

        // About PSP (Philosophy, Problem, Solution, Promise)
        Homepage::create([
            'section_name' => 'about_psp',
            'data' => [
                'titleBelieve' => 'What We Believe - Relentless Pursuit of Impact with Depth.',
                'contentBelieve' => 'We believe every unit of work should contain not just accuracy, quantity, and efficiency but higher insight, empathy, and alignment with business outcomes. By fixing the design at the micro level, we unlock impact at the macro level — so that every interaction isn\'t just handled, it delivers value. Every single unit of work — every call answered,  ticket resolved, content moderation tagged, or AI response annotated — carries within it the design of the entire system: training, management, alignment, and culture. <br /><br /> "We don\'t just scale unit of work — we maximize the impact of every work unit."',
                'titleProblem' => 'The Problem',
                'contentProblem' => 'Traditional outsourcing optimizes for cost and volume, not necessarily value. The result? Units of work — calls, tickets, transactions, moderation or AI annotations — are handled transactionally, not with the required standard to make meaningful impact.',
                'titleSolution' => 'The Solution',
                'contentSolution' => 'We fix outsourcing at the design level. We embed quality, efficiency, and judgment into every unit of work, so each interaction isn\'t just processed — it delivers business impact. From the micro (a single response) to the macro (scaling thousands of interactions), we ensure work reflects value, not just volume.',
                'titlePromise' => 'The Promise',
                'contentPromise' => 'Relentless pursuit of measurable impact at scale with depth.'
            ],
            'is_active' => true
        ]);

        // Card Data
        Homepage::create([
            'section_name' => 'cards',
            'data' => [
                [
                    'id' => 1,
                    'title' => 'World-Class Talent Access',
                    'subtitle' => 'We recruit top-tier talent for the top 1% of BPO companies — and bring that same capability to you, whatever your hiring needs. We find the right candidates at the right market price — skilled in judgment-based and impact-driven work.'
                ],
                [
                    'id' => 2,
                    'title' => 'Specialized Roles for Maximum Impact',
                    'subtitle' => 'With 20+ years of experience building global teams in India, Pakistan, and Philippines, we focus on functions and digitized industries where we can deliver the greatest impact and business outcomes. Specialization amplifies value.'
                ],
                [
                    'id' => 3,
                    'title' => 'Training Built for Judgment & Quality',
                    'subtitle' => 'With 20+ years of combined training experience, we use Socratic methods, focus on the WHY, and rely on shared expertise to design programs that fix quality gaps and decision-making issues from day one — ensuring every output delivers impact.'
                ]
            ],
            'is_active' => true
        ]);

        // Collage Images
        Homepage::create([
            'section_name' => 'collage_images',
            'data' => [
                ['id' => 1, 'img' => '../Assets/ppl.jpg'],
                ['id' => 2, 'img' => '../Assets/ppl.jpg'],
                ['id' => 3, 'img' => '../Assets/ppl.jpg'],
                ['id' => 4, 'img' => '../Assets/ppl.jpg']
            ],
            'is_active' => true
        ]);

        // Top Talent Data
        Homepage::create([
            'section_name' => 'top_talent',
            'data' => [
                'title' => 'Top Talent. Focused Roles. Training That Delivers. Impact at Scale.',
                'subtitle' => 'Numbers That Matter',
                'checks' => [
                    'We can scale teams from 0 to 500+ in under 4 months.',
                    'Average conversion rate of 50% from endorsements to hire.',
                    '98% client satisfaction rate.'
                ],
                'button' => 'See How We Scale Teams'
            ],
            'is_active' => true
        ]);

        // VTS Result Data
        Homepage::create([
            'section_name' => 'vts_results',
            'data' => [
                'top' => [
                    [
                        'title' => 'Quality Results: Proven Performance',
                        'titleItalic' => 'Beyond the Market',
                        'content' => 'We don\'t just scale teams—we ensure they deliver lasting value. By combining precision recruitment with operational enablement, we consistently outperform the market across every key measure of global team success.<br/><br/> The Impact: More stability, less cost, and stronger ROI for global companies building in the Philippines.',
                        'proof' => 'See the numbers that matter to your business.',
                        'button' => 'Request a Case Study',
                        'grid' => [
                            ['id' => 1, 'title' => '25%', 'subtitle' => 'Higher Retention', 'content' => 'Teams stay longer, lowering attrition costs and ensuring continuity.'],
                            ['id' => 2, 'title' => '20%', 'subtitle' => 'Faster Ramp-Up', 'content' => 'New hires reach full productivity quicker than average.'],
                            ['id' => 3, 'title' => '35%', 'subtitle' => 'Stronger Conversion Rates', 'content' => 'More candidates progress from endorsement to hire.'],
                            ['id' => 4, 'title' => '95%', 'subtitle' => 'Superior Client Expansion', 'content' => 'Most clients grow headcount within 12 months.'],
                            ['id' => 5, 'title' => '+15', 'subtitle' => 'Higher Satisfaction (NPS)', 'content' => 'Client NPS scores exceed industry benchmarks.']
                        ]
                    ]
                ],
                'bottom' => [
                    [
                        'img' => '/Assets/ppl.jpg',
                        'title' => 'The Cost Advantage:',
                        'titleItalic' => '70% Savings, 100% Performance',
                        'p' => 'Scaling global teams isn\'t just about finding the right talent—it\'s about maximizing value. By building teams in the Philippines with us, you unlock significant cost advantages without sacrificing performance.',
                        'bulletTitle' => 'Why Clients Choose Us',
                        'bullets' => [
                            'Up to 70% Lower Salary Costs compared to onshore markets in the U.S., U.K., and Australia.',
                            'Higher ROI per Hire – Our people deliver 25% stronger operational results, giving you more value per dollar.',
                            'Efficiency Beyond Payroll – Reduced attrition, fewer errors, and faster resolution times mean you save on hidden costs that drain most operations.'
                        ],
                        'closingRemarks' => 'The outcome: teams that cost less, perform better, and scale faster.',
                        'followUpQuestion' => 'Ready to reduce costs and increase performance?'
                    ]
                ],
                'button' => 'Start Building Your Team'
            ],
            'is_active' => true
        ]);
    }
}
