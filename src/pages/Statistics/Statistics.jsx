import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../Utility/LocalStorage/LocalStorage";
import { PieChart, Pie, Cell } from 'recharts';

const Statistics = () => {
    const donations = useLoaderData();
    var totalDonation = 0;
    for (const donation of donations) {
        totalDonation += donation.price;
    }

    const [donated, setDonated] = useState(0);
    useEffect(() => {
        const storedDonationId = getStoredDonation();
        if (donations.length > 0) {
            var totalDonated = 0;
            for (const id of storedDonationId) {
                const donation = donations.find(donation => donation.id === id);
                if (donation) {
                    totalDonated += donation.price;
                }
            }
            setDonated(totalDonated);
        }
    }, [donations]);

    const percentage = (donated / totalDonation) * 100;

    const COLORS = ['#FF444A', '#00C49F'];
    const data = [
        { name: 'Remaining', value: 100 - percentage },
        { name: 'Donated', value: percentage }
    ];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };

    return (
        <div>
            <div className="flex justify-center">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>

                </PieChart>
            </div>
            <div className="md:flex justify-center gap-12 p-4 mx-auto">
                <div className="flex gap-2 items-center">
                    <p>Your Donation</p>
                    <p className="bg-[#00C49F] w-[80px] h-[15px]"></p>
                </div>
                <div className="flex gap-2 items-center">
                    <p>Total Donation</p>
                    <p className="bg-[#FF444A] w-[80px] h-[15px]"></p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
