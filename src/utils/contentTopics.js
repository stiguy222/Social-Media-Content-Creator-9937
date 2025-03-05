const TOPICS = {
  tech: {
    facebook: "Diving deep into the latest tech breakthrough! Our new {product} is revolutionizing how we think about {category}. With groundbreaking features like {feature1} and {feature2}, we're setting new industry standards. Early users report {benefit} - a game-changer for both professionals and enthusiasts. #TechInnovation #FutureOfTech",
    instagram: "🚀 Game-changing tech alert! 💡\nIntroducing our revolutionary {product} that's transforming {category}!\n\nKey highlights:\n✨ {feature1}\n✨ {feature2}\n\nSwipe to see it in action! 📱\n\n#TechRevolution #Innovation #{category}",
    linkedin: "Excited to unveil our latest innovation in {category}! After months of R&D, our team has developed {product} that addresses key industry challenges. Early adoption metrics show {benefit}, marking a significant step forward in professional solutions. Connect to learn how this can transform your workflow."
  },
  sustainability: {
    facebook: "Making a difference, one step at a time! 🌱 Our commitment to sustainability takes a giant leap forward with our new {initiative}. By focusing on {focus_area}, we're reducing environmental impact while delivering exceptional value. Join us in building a greener future! #Sustainability #GreenInnovation",
    instagram: "🌍 Planet-first innovation!\nProud to introduce {initiative} - our latest step towards sustainability.\n\nHighlights:\n🌱 {focus_area}\n💚 {impact}\n\nBe part of the change!\n\n#SustainableFuture #GreenTech",
    linkedin: "Sustainability meets innovation: Announcing our new {initiative}. Through strategic focus on {focus_area}, we're demonstrating how businesses can drive positive environmental change while maintaining growth. The results: {impact}. Let's connect to discuss sustainable business practices."
  },
  wellness: {
    facebook: "Your wellness journey starts here! 💪 Discover how our new {program} is helping people achieve their health goals. With personalized {approach} and expert guidance, we're making wellness accessible to everyone. See the transformation stories below! #WellnessJourney #HealthyLiving",
    instagram: "✨ Transform your wellness journey!\n\nIntroducing {program}\n🌟 {approach}\n💫 {benefit}\n\nYour path to better health starts now!\n\n#WellnessGoals #HealthyLifestyle",
    linkedin: "Health and productivity go hand in hand. Our new {program} demonstrates how organizations can support employee wellness through {approach}. The results speak for themselves: {benefit}. Let's discuss how wellness initiatives can transform workplace culture."
  }
};

export const generateDailyContent = () => {
  const topics = Object.keys(TOPICS);
  const today = new Date();
  const topicIndex = today.getDate() % topics.length;
  const selectedTopic = topics[topicIndex];
  
  const variables = {
    tech: {
      product: ["AI Assistant", "Smart Analytics Platform", "Cloud Solution"][Math.floor(Math.random() * 3)],
      category: ["data analytics", "workflow automation", "cloud computing"][Math.floor(Math.random() * 3)],
      feature1: ["real-time processing", "advanced AI integration", "seamless automation"][Math.floor(Math.random() * 3)],
      feature2: ["predictive analytics", "smart optimization", "secure collaboration"][Math.floor(Math.random() * 3)],
      benefit: ["40% efficiency increase", "95% accuracy improvement", "2x productivity boost"][Math.floor(Math.random() * 3)]
    },
    sustainability: {
      initiative: ["Green Supply Chain", "Zero Waste Program", "Renewable Energy Transition"][Math.floor(Math.random() * 3)],
      focus_area: ["carbon footprint reduction", "sustainable packaging", "renewable energy adoption"][Math.floor(Math.random() * 3)],
      impact: ["50% emissions reduction", "90% waste elimination", "100% renewable energy use"][Math.floor(Math.random() * 3)]
    },
    wellness: {
      program: ["Holistic Wellness Platform", "Mental Health Initiative", "Work-Life Balance Program"][Math.floor(Math.random() * 3)],
      approach: ["AI-driven personalization", "expert-guided programs", "data-driven coaching"][Math.floor(Math.random() * 3)],
      benefit: ["improved work-life balance", "reduced stress levels", "increased team productivity"][Math.floor(Math.random() * 3)]
    }
  };

  const replaceVariables = (template, vars) => {
    let result = template;
    Object.entries(vars).forEach(([key, value]) => {
      result = result.replace(`{${key}}`, value);
    });
    return result;
  };

  return {
    facebook: replaceVariables(TOPICS[selectedTopic].facebook, variables[selectedTopic]),
    instagram: replaceVariables(TOPICS[selectedTopic].instagram, variables[selectedTopic]),
    linkedin: replaceVariables(TOPICS[selectedTopic].linkedin, variables[selectedTopic])
  };
};