import { getLifeMoments } from "@psi/services/onboarding"
import { CardLifeMoment } from "./_components/card-life-moment"

export default async function OnboardingResultPage() {
  const resultList = await getLifeMoments({ user: "text@text.com" })

  if (resultList == null) return

  return (
    <div className="max-w-6xl mx-auto py-4 pr-4 pl-4">
      <div className="grid grid-cols-1 gap-x-4">
        <div className="space-y-8">
          <div className="flex flex-col space-y-4">
            <h2 className="font-semibold text-3xl">
              Life Moments
            </h2>
            <p className="text-gray-500 text-lg">
              Each one of us goes through different moments in life. Is better to not go alone.
            </p>
          </div>
          <div className="flex flex-col">
            {resultList?.map((x, idx) => (
              <CardLifeMoment
                key={idx}
                lifeMoment={{
                  id: x.id,
                  name: x.name,
                  description: x.description,
                  thumb: x.thumb,
                  category: x.category,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
