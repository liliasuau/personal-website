import { Component, OnInit } from '@angular/core';
import { CookData, ImageInfo } from '../../models/cook-data.dto';
import { ConfettiService } from '../../services/confetti.service';

declare var $: any;
@Component({
    selector: 'birthday',
    templateUrl: './birthday.component.html',
    styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent implements OnInit {
    public currentSection;
    public categoryId: number;
    public allData: CookData[];
    public data: CookData[];
    public introText: string;
    public right_1: number = 0;
    public right_2: number = 0;
    public left_1: number = 0;
    public left_2: number = -200;

    constructor(public confettiService: ConfettiService) {
        this.introText = 'Surprise! We are taking a cooking class together :)';
        this.allData = [
            {
                id: 1,
                categoryId: 2, // italian
                title: 'Date Night: ',
                subtitle: 'Italian Nights',
                description: 'We’ll show you how to sear steak the Italian way with a few simple ingredients: olive oil, lemon and rosemary. For sides, we’ll be creating a delicious Panzanella (bread salad) and Grilled Zucchini with Pesto. No tour of the Italy is complete without a little dolce—like a creamy custard with berries.',
                more: '',
                src: [
                    {
                        id: 1,
                        viewing: true,
                        name: 'assets/images/italian_nights1.webp'
                    }
                ],
                options: ['Steak Tagliata', 'Panzanella', 'Grilled Zucchini with Pesto', 'Prosecco Sabayon with Berries']
            },
            {
                id: 2,
                categoryId: 1, // american 
                title: 'Date Night: ',
                subtitle: 'New York Steakhouse',
                description: 'Learn how to get the perfect sear on steak, sub in kale for a fresh spin on creamed greens and bake popovers that will make any dinner roll jealous. Plus, we’ll show you how a bain-marie and blow torch deliver the quintessential custard dessert.',
                more: '',
                src: [
                    {
                        id: 1,
                        viewing: true,
                        name: 'assets/images/ny-steak_nights.webp'
                    }
                ],
                options: ['Seared Steak with Gorgonzola-Shallot Butter', 'Creamed Kale with Roasted Garlic', 'Thyme and Gruyère Popovers', 'Vanilla Bean Crème Brûlée']
            },
            {
                id: 3,
                categoryId: 4, // parisian
                title: 'Date Night: ',
                subtitle: 'A Parisian Evening',
                description: 'Indulge in a romantic evening inspired by the culinary elegance of France. Create memorable moments together as our chef instructor guides you through the preparation of a luxurious meal. Learn the art of achieving a perfect sear on succulent scallops, creating a beautiful golden crust while keeping them tender and juicy inside, then pair them with a tangy and aromatic beurre blanc sauce. You’ll also master the technique of layering potatoes in a classic gratin for delicious results with the perfect balance of flavors of gruyere and thyme. Then, conclude your evening with a decadent, velvety mousse featuring the bittersweet richness of chocolate and the zesty brightness of orange.',
                more: '',
                src: [
                    {
                        id: 1,
                        viewing: true,
                        name: 'assets/images/scallops1.webp'
                    },
                    {
                        id: 2,
                        viewing: false,
                        name: 'assets/images/scallops2.webp'
                    },
                    {
                        id: 3,
                        viewing: false,
                        name: 'assets/images/scallops3.webp'
                    },
                    {
                        id: 4,
                        viewing: false,
                        name: 'assets/images/scallops4.webp'
                    }
                ],
                options: ['Seared Scallops with Lemon-Chive Beurre Blanc', 'Potato Gruyère and Thyme Gratin', 'Green Salad with Shaved Radish', 'Bittersweet Chocolate and Orange Mousse']
            },
            {
                id: 4,
                categoryId: 2, // italian
                title: 'Italian Steakhouse',
                subtitle: '',
                description: 'You’ll learn to prepare a refined menu that celebrates the flavors of Italy. In this class, you’ll master the art of cooking Flank Steak to perfection, adorned with a compound butter that you will craft from scratch and topped with crispy onions for added flavor and texture. Delight your senses with Prosciutto-Wrapped Melon, a classic antipasti that combines salty and sweet in the most perfect way. For the grand finale, discover the secrets behind creating a luxurious panna cotta made with vanilla and mascarpone, a silky dessert that will leave a lasting impression.',
                more: '',
                src: [
                    {
                        id: 1,
                        viewing: true,
                        name: 'assets/images/italian_steak1.webp'
                    },
                    {
                        id: 2,
                        viewing: false,
                        name: 'assets/images/italian_steak2.webp'
                    },
                    {
                        id: 3,
                        viewing: false,
                        name: 'assets/images/italian_steak3.webp'
                    },
                    {
                        id: 4,
                        viewing: false,
                        name: 'assets/images/italian_steak4.webp'
                    }
                ],
                options: ['Flank Steak with Roasted Garlic Compound Butter and Crispy Onions', 'Proscuitto-Wrapped Melon', 'Caprese Salad', 'Vanilla-Mascarpone Panna Cotta',]
            },
            {
                id: 5,
                categoryId: 1, // american
                title: 'Date Night: ',
                subtitle: 'Steak And Crab Cakes',
                description: 'Explore new twists on this classic pairing. In this class, you’ll learn techniques for creating a surf and turf dinner using the freshest, most flavorful ingredients from land and sea. We’ll show you how to grill a juicy steak and make delectable Crab Cakes. For dessert, we’ll bake alarmingly delicious Molten Chocolate Lava Cakes.',
                more: '',
                src: [
                    {
                        id: 1,
                        viewing: true,
                        name: 'assets/images/crab_cake1.webp'
                    },
                    {
                        id: 2,
                        viewing: false,
                        name: 'assets/images/crab_cake2.webp'
                    }
                ],
                options: ['Steak with Aioli', 'Crab Cakes', 'Roasted Asparagus', 'Molten Chocolate Lava Cakes',]
            },
            {
                id: 6,
                categoryId: 2, // italian
                title: 'Savor Italy',
                description: 'Experience the warmth and flavor of Italy in this menu that celebrates Italian cuisine. Learn the art of crafting fresh pasta dough and master the technique of creating a creamy sauce with eggs, cheese and pancetta for a luxurious and comforting dish. Plus, celebrate the bounty of late summer with a vibrant salad and a from-scratch dressing that perfectly balances every flavor. Finally, indulge in a decadent tiramisu featuring rich espresso and dark chocolate.',
                more: '',
                src: [
                    {
                        id: 1,
                        viewing: true,
                        name: 'assets/images/savor1.webp'
                    },
                    {
                        id: 2,
                        viewing: false,
                        name: 'assets/images/savor2.webp'
                    },
                    {
                        id: 3,
                        viewing: false,
                        name: 'assets/images/savor3.webp'
                    }
                ],
                options: ['Fettuccini Carbonara', 'Late Summer Salad', 'Dark Chocolate Tiramisu', 'Handmade Pasta Dough',]
            },
            {
                id: 7,
                categoryId: 1, // american
                title: 'Date Night: ',
                subtitle: 'Chef Favorites',
                description: 'Make your next date night extra special with a delicious experience! Grab your special someone and learn to make a restaurant-quality meal in this hands-on class. Our chef instructor will guide you through making a showstopping Wellington using pork tenderloin and roasting seasonal vegetables to pair with farro. To make the night even sweeter, you’ll make a Dutch baby enhanced with caramelized apples for dessert.',
                more: '',
                src: [
                    {
                        id: 1,
                        viewing: true,
                        name: 'assets/images/chef1.webp'
                    },
                    {
                        id: 2,
                        viewing: false,
                        name: 'assets/images/chef2.webp'
                    },
                    {
                        id: 3,
                        viewing: false,
                        name: 'assets/images/chef3.webp'
                    }
                ],
                options: ['Pork Tenderloin Wellington', 'Roasted Fall Vegetables with Farro', 'Caramelized Apple Dutch Baby']
            },
            {
                id: 8,
                categoryId: 1, // american
                title: 'Mastering Everyday Gourmet',
                description: 'Unlock the secrets to creating delicious dishes perfect for home cooks looking to elevate their culinary skills. Learn essential techniques that will help you confidently craft impressive and flavorful dishes. Master the art of breading and frying chicken cutlets—achieving a crispy exterior while keeping the meat juicy and flavorful—then top with a bright cream sauce infused with citrus and herbs. You’ll also learn how to perfectly prep a salad, practicing knife skills, balancing textures and crafting a dressing that ties it all together. Your chef instructor will also teach you how to prep fresh herbs to infuse into orzo for a fluffy and tender side. Finally, end with a sweet and simple dessert, perfectly caramelizing apples and crafting a crunchy, buttery topping.',
                more: '',
                src: [
                    {
                        id: 1,
                        viewing: true,
                        name: 'assets/images/gourmet1.webp'
                    },
                    {
                        id: 2,
                        viewing: false,
                        name: 'assets/images/gourmet2.webp'
                    },
                    {
                        id: 3,
                        viewing: false,
                        name: 'assets/images/gourmet3.webp'
                    }
                ],
                options: ['Chicken Milanese with Lemon Sage Cream Sauce', 'Apple and Celery Root Salad', 'Orzo Pilaf with Fresh Herbs', 'Skillet Apple Crisp']
            },
            {
                id: 9,
                categoryId: 2, // italian
                title: 'Great Gnocchi At Home',
                description: 'Who can resist fresh, handmade gnocchi? These pillow-soft dumplings melt in your mouth and quickly vanish from the plate. In this technique-driven class, we’ll show you the secrets for creating traditional potato gnocchi, along with some delicious variations made with semolina or ricotta (gnudi). You’ll learn how to properly roll and cook these classic dumplings. Plus, we’ll make three great sauces—pesto, tomato and brown butter—that pair perfectly with gnocchi.',
                more: '',
                src: [
                    {
                        id: 1,
                        viewing: true,
                        name: 'assets/images/gnocchi1.webp'
                    },
                    {
                        id: 2,
                        viewing: false,
                        name: 'assets/images/gnocchi2.webp'
                    }
                ],
                options: ['Traditional Potato Gnocchi with Brown Butter and Sage', 'Gnocchi Gnudi with Hazelnut Pesto and Goat Cheese', 'Semolina Gnocchi with Tomato Sauce and Olives']
            },
            {
                id: 10,
                categoryId: 1, // american
                title: `Chef’s Anniversary Feast`,
                description: 'Our company started with a simple idea: Make good food. Invite people. Do it daily. 52 years later, we’re still living by that idea. In honor of our Anniversary this month, we invite you to join us for another fabulous meal together. In this celebratory class, our expert chef instructor will guide you through creating a classic French meal featuring a succulent Steak au Poivre and crisp, layered potatoes for Pommes Anna. We’ll end on a sweet note by making decadent Chocolate Crêpes with Chantilly Cream for dessert. Throughout class we’ll use essential tools, techniques and ingredients that every cook should know about—no matter your skill level.',
                more: '',
                src: [
                    {
                        id: 1,
                        viewing: true,
                        name: 'assets/images/ann1.webp'
                    },
                    {
                        id: 2,
                        viewing: false,
                        name: 'assets/images/ann2.webp'
                    },
                    {
                        id: 3,
                        viewing: false,
                        name: 'assets/images/ann3.webp'
                    },
                    {
                        id: 4,
                        viewing: false,
                        name: 'assets/images/ann4.webp'
                    }
                ],
                options: ['Steak au Poivre', 'Pommes Anna', 'Braised Leeks with Tarragon Mustard Vinaigrette', 'Chocolate Crêpe with Chantilly Cream']
            },
        ]
    }

    public ngOnInit(): void {
        this.initialize();

        this.filterData(5);

        this.confettiService.celebrate();

        var test = document.getElementById('test');
        console.log(test);
        if (test) 
            test.classList.add("hide");
    }

    public initialize(): void {
        setTimeout(() => {
            this.incrementItems();
            if (this.right_1 < -100) {
                this.right_1 = 0;
                this.right_2 = 0
            }
            if (this.left_1 > 100) {
                this.left_1 = 0;
                this.left_2 = -200;
            }
            this.setMovingItems();
            this.initialize();
        }, 0)
    }

    public filterData(categoryId: number): void {
        this.categoryId = categoryId;
        if (categoryId == 5) {
            // show all data
            this.data = this.allData;
        } else {
            this.data = this.allData.filter(x => x.categoryId == categoryId);
        }
    }

    private incrementItems(): void {
        this.right_1 = this.right_1 - 0.02;
        this.right_2 = this.right_2 - 0.02;
        this.left_1 = this.left_1 + 0.02;
        this.left_2 = this.left_2 + 0.02;
    }

    private setMovingItems(): void {
        $("#transform-right__1").css({ "transform": "translateX(" + this.right_1 + "%)" });
        $("#transform-right__2").css({ "transform": "translateX(" + this.right_2 + "%)" });
        $("#transform-left__1").css({ "transform": "translateX(" + this.left_1 + "%)" });
        $("#transform-left__2").css({ "transform": "translateX(" + this.left_2 + "%)" });
    }

    public updateImage(image: ImageInfo, index: number, data: any): void {
        const imageRef = this.data.filter(x => x.id == data.id).map(x => x.src).flat();
        const nextIndex = imageRef[index + 1];

        image.viewing = false;

        if (nextIndex) {
            nextIndex.viewing = true;
        } else {
            imageRef[0].viewing = true;
        }
    }
}
