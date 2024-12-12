import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const VocabularyCard = ({ vocabulary }) => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl text-center">
          {vocabulary.word}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">Pronunciation:</h3>
          <p className="text-lg">{vocabulary.pronunciation}</p>
        </div>
        <div>
          <h3 className="font-semibold">When to Say:</h3>
          <p className="text-lg">{vocabulary.whenToSay}</p>
        </div>
        {vocabulary.additionalInfo && (
          <div>
            <h3 className="font-semibold">Additional Information:</h3>
            <p className="text-lg">{vocabulary.additionalInfo}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
export default VocabularyCard;
