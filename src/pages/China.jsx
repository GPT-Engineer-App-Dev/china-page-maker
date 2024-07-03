import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const China = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">China</CardTitle>
        </CardHeader>
        <CardContent>
          <p>China, officially the People's Republic of China, is a country in East Asia. It is the world's most populous country, with a population of more than 1.4 billion.</p>
          <AspectRatio ratio={16 / 9} className="mt-4">
            <img src="/placeholder.svg" alt="Chinese Flag" className="object-cover rounded-md" />
          </AspectRatio>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Geography</CardTitle>
        </CardHeader>
        <CardContent>
          <p>China is the third largest country by total area. It spans five geographical time zones and borders 14 different countries, the second most of any country in the world after Russia.</p>
          <AspectRatio ratio={16 / 9} className="mt-4">
            <img src="/placeholder.svg" alt="Map of China" className="object-cover rounded-md" />
          </AspectRatio>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Culture</CardTitle>
        </CardHeader>
        <CardContent>
          <p>China is one of the world's oldest civilizations, with a rich cultural heritage that includes festivals, traditional clothing, and more.</p>
          <AspectRatio ratio={16 / 9} className="mt-4">
            <img src="/placeholder.svg" alt="Chinese Culture" className="object-cover rounded-md" />
          </AspectRatio>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Economy</CardTitle>
        </CardHeader>
        <CardContent>
          <p>China has the world's second-largest economy by nominal GDP and the largest by purchasing power parity (PPP). It is a global hub for manufacturing and trade.</p>
          <AspectRatio ratio={16 / 9} className="mt-4">
            <img src="/placeholder.svg" alt="Chinese Economy" className="object-cover rounded-md" />
          </AspectRatio>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Tourism</CardTitle>
        </CardHeader>
        <CardContent>
          <p>China is home to numerous tourist attractions, including the Great Wall, the Forbidden City, and the Terracotta Army.</p>
          <AspectRatio ratio={16 / 9} className="mt-4">
            <img src="/placeholder.svg" alt="Tourist Attractions in China" className="object-cover rounded-md" />
          </AspectRatio>
        </CardContent>
      </Card>
    </div>
  );
};

export default China;