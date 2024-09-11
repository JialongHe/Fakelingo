import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";

const LearnPage = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <div>test</div>
                {/* <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={isPro}
                />
                {!isPro && (<Promo />)}
                <Quests points={userProgress.points} /> */}
            </StickyWrapper>
            <FeedWrapper>
                <div>testFeed</div>
                {/* <Header title={userProgress.activeCourse.title} />
                {units.map((unit) => (
                <div key={unit.id} className="mb-10">
                    <Unit
                    id={unit.id}
                    order={unit.order}
                    description={unit.description}
                    title={unit.title}
                    lessons={unit.lessons}
                    activeLesson={courseProgress.activeLesson as typeof lessons.$inferSelect & {
                        unit: typeof unitsSchema.$inferSelect;
                    } | undefined}
                    activeLessonPercentage={lessonPercentage}
                    />
                </div>
                ))} */}
            </FeedWrapper>
        </div>
    )
}

export default LearnPage;